import { comparison } from '@/content/positioning';
import styles from './ComparisonTable.module.scss';

const Mark = ({ yes, strong = false }: { yes: boolean; strong?: boolean }) => (
  <span className={`${styles.mark} ${yes ? styles.yes : styles.no} ${strong ? styles.strong : ''}`}>
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {yes ? <path d="M3 8.5 6.5 12 13 4.5" /> : <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />}
    </svg>
    <span className="visually-hidden">{yes ? 'Sí' : 'No'}</span>
  </span>
);

export default function ComparisonTable({ caption }: { caption: string }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="visually-hidden">Criterio</span>
            </th>
            <th scope="col">Freelancer</th>
            <th scope="col">Gran agencia</th>
            <th scope="col" className={styles.blendCol}>
              Blend
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row) => (
            <tr key={row.criteria}>
              <th scope="row">{row.criteria}</th>
              <td>
                <Mark yes={row.freelancer} />
              </td>
              <td>
                <Mark yes={row.agency} />
              </td>
              <td className={styles.blendCol}>
                <Mark yes strong />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
