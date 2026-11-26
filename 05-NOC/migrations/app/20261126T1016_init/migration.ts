#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/8f826c28aa36854ce504b7457416a7370b35e0a8172c019bc68e559056a572d5/contract';
import endContract from '../../snapshots/8f826c28aa36854ce504b7457416a7370b35e0a8172c019bc68e559056a572d5/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'LogModel',
        columns: [
          col('createdAt', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('level', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('message', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('origin', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'LogModel_level_check_16a53951',
            sql`"level" IN ('LOW', 'MEDIUM', 'HIGH')`,
          ),
        ],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
