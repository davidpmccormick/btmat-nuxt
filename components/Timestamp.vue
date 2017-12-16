<template>
  <div class="timestamp">
    <Icon name="clock" class="timestamp__icon" />
    {{ displayDate }}
  </div>
</template>

<script>
import Icon from '~/components/Icon';

const monthMap = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};
export default {
  components: {
    Icon
  },
  props: ['model'],
  computed: {
    dayOfMonth() {
      return this.model.date[0] === '0'
        ? this.model.date.slice(1)
        : this.model.date;
    },
    displayDate() {
      return `${this.dayOfMonth} ${monthMap[this.model.month]}, ${this.model.year}`;
    }
  }
};
</script>

<style>
  .timestamp {
    display: flex;
    font-family: 'proxima-soft';
    align-items: center;
    font-size: 1rem;
    margin-bottom: 3em;
  }

  .timestamp__icon {
    margin-right: 0.3em;
  }
</style>
