import parse5 from 'parse5';

export function bodyParser(content) {
  const fragment = parse5.parseFragment(content);
  const preCleaned = cleanNodes(fragment.childNodes, [removeEmptyTextNodes]);
  const components = convertToComponents(preCleaned);
  const cleanedComponents = cleanNodes(components, [removeExtraAttrs]);

  return cleanedComponents;
}

export function removeEmptyTextNodes(nodes) {
  return nodes.filter(node => !isEmptyText(node));
}

function isEmptyText(node) {
  return node.nodeName === '#text' && node.value.trim() === '';
}

function removeExtraAttrs(nodes) {
  const superfluousAttrs = ['class', 'style', 'id'];

  return nodes.map(node => {
    if (node.attrs) {
      const cleanedAttrs = node.attrs.filter(attr => superfluousAttrs.indexOf(attr.name) === -1);
      node.attrs = cleanedAttrs;
    }

    return node;
  });
}

function cleanNodes(nodes, cleaners) {
  return cleaners.reduce((nodes, cleaner) => cleaner(nodes), nodes).map(node => {
    if (!(node.childNodes && node.childNodes.length > 0)) return node;

    const childNodes = cleanNodes(node.childNodes, cleaners);

    return Object.assign({}, node, {childNodes});
  });
}

function convertToComponents(nodes) {
  const converters = [
    convertImage
  ];

  return nodes.map((node, index) => {
    if (index === 0 && node.tagName === 'p') return convertStandfirst(node, index);

    const component = converters.reduce((node, converter) => converter(node, index), node);

    return component.type ? component : convertDomNode(component, index);
  }).filter(_ => _);
}

function convertStandfirst(node, index) {
  return {
    type: 'standfirst',
    value: {
      id: index,
      html: serializeNode(node)
    }
  };
}

function convertDomNode(node, index) {
  return {
    type: 'html',
    value: {
      id: index,
      html: serializeNode(node)
    }
  };
}

function serializeNode(node) {
  const treeAdapter = parse5.treeAdapters.default;
  const frag = treeAdapter.createDocumentFragment();

  treeAdapter.appendChild(frag, node);

  return parse5.serialize(frag);
}

function getAttrValue(node, attrName) {
  const attr = node.attrs && node.attrs.find(a => a.name && a.name === attrName);

  return attr && attr.value;
}

function convertImage(node, index) {
  const classNames = getAttrValue(node, 'class');
  const classNamesArray = classNames && classNames.split(' ');
  const isImageWrapper = classNamesArray && classNamesArray.includes('wp-caption');

  if (!isImageWrapper) return node;

  const image = node.childNodes && node.childNodes[0] && node.childNodes[0].childNodes[0];
  const caption = node.childNodes && node.childNodes[1];

  return {
    type: 'image',
    value: {
      id: index,
      src: image && getAttrValue(image, 'src'),
      alt: image && getAttrValue(image, 'alt'),
      caption: caption && serializeNode(caption)
    }
  };
}
