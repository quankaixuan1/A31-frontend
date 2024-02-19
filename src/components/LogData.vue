<template>
  <div class="q-pa-md">
    <q-table
      title="漏洞日志"
      :rows="rows"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="导出表格"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile, useQuasar } from 'quasar';

const columns = [
  {
    name: 'name',
    required: true,
    label: '漏洞类型',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    // sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: '攻击次数',
    field: 'calories',
    sortable: true,
  },
  {
    name: 'fat',
    align: 'center',
    label: '有效攻击次数',
    field: 'fat',
    sortable: true,
  },
  { name: 'carbs', align: 'center', label: '攻击案例', field: 'carbs' },
  { name: 'protein', align: 'center', label: '漏洞说明', field: 'protein' },
  { name: 'sodium', align: 'center', label: '其他', field: 'sodium' },
  {
    name: 'calcium',
    label: '其他',
    field: 'calcium',
    // sortable: true,
    // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '其他',
    field: 'iron',
    // sortable: true,
    // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: '类型一',
    calories: 159,
    fat: 6.0,
    // carbs: 24,
    // protein: 4.0,
    // sodium: 87,
    // calcium: '14%',
    // iron: '1%',
  },
  {
    name: '类型二',
    calories: 237,
    fat: 9.0,
    // carbs: 37,
    // protein: 4.3,
    // sodium: 129,
    // calcium: '8%',
    // iron: '1%',
  },
  {
    name: '类型三',
    calories: 262,
    fat: 16.0,
    // carbs: 23,
    // protein: 6.0,
    // sodium: 337,
    // calcium: '6%',
    // iron: '7%',
  },
  {
    name: '类型四',
    calories: 305,
    fat: 3,
    // carbs: 67,
    // protein: 4.3,
    // sodium: 413,
    // calcium: '3%',
    // iron: '8%',
  },
  {
    name: '类型五',
    calories: 356,
    fat: 16.0,
    // carbs: 49,
    // protein: 3.9,
    // sodium: 327,
    // calcium: '7%',
    // iron: '16%',
  },
  {
    name: '类型六',
    calories: 375,
    fat: 0.0,
    // carbs: 94,
    // protein: 0.0,
    // sodium: 50,
    // calcium: '0%',
    // iron: '0%',
  },
  {
    name: '类型七',
    calories: 392,
    fat: 0,
    // carbs: 98,
    // protein: 0,
    // sodium: 38,
    // calcium: '0%',
    // iron: '2%',
  },
  {
    name: '类型八',
    calories: 408,
    fat: 3,
    // carbs: 87,
    // protein: 6.5,
    // sodium: 562,
    // calcium: '0%',
    // iron: '45%',
  },
  {
    name: '类型九',
    calories: 452,
    fat: 25.0,
    // carbs: 51,
    // protein: 4.9,
    // sodium: 326,
    // calcium: '2%',
    // iron: '22%',
  },
  {
    name: '类型十',
    calories: 518,
    fat: 26.0,
    // carbs: 65,
    // protein: 7,
    // sodium: 54,
    // calcium: '12%',
    // iron: '6%',
  },
];

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}

export default {
  setup() {
    const $q = useQuasar();

    return {
      columns,
      rows,

      exportTable() {
        // naive encoding to csv format
        const content = [columns.map((col) => wrapCsvValue(col.label))]
          .concat(
            rows.map((row) =>
              columns
                .map((col) =>
                  wrapCsvValue(
                    typeof col.field === 'function'
                      ? col.field(row)
                      : row[col.field === void 0 ? col.name : col.field],
                    col.format,
                    row
                  )
                )
                .join(',')
            )
          )
          .join('\r\n');

        const status = exportFile('table-export.csv', content, 'text/csv');

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning',
          });
        }
      },
    };
  },
};
</script>
