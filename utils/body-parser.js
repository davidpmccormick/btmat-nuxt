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

  return nodes.map((node) => {
    const component = converters.reduce((node, converter) => converter(node), node);

    return component.type ? component : convertDomNode(component);
  }).filter(_ => _);
}

export function convertDomNode(node) {
  return {
    type: 'html',
    value: serializeNode(node)
  };
}

function serializeNode(node) {
  const treeAdapter = parse5.treeAdapters.default;
  const frag = treeAdapter.createDocumentFragment();

  treeAdapter.appendChild(frag, node);

  return parse5.serialize(frag);
}

function findByTagName(node, tagName) {
  if (node.nodeName === tagName) return node;
  if (!(node.childNodes && node.childNodes[0])) return;

  return findByTagName(node.childNodes[0], tagName);
}

function getAttrValue(node, attrName) {
  const attr = node.attrs.find(a => a.name === attrName);

  return attr && attr.value;
}

function convertImage(node) {
  const image = findByTagName(node, 'img');

  if (!image) return node;

  return {
    type: 'image',
    value: {
      src: getAttrValue(image, 'src'),
      alt: getAttrValue(image, 'alt')
    }
  };
}
