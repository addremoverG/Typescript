import { createReadStream, createWriteStream, ReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline, Readable } from 'stream'; //Transform,

import { PromisePool } from '@supercharge/promise-pool';

(async (): Promise<void> => {
  console.time('[Log]Start execution app');

  const fromFile = resolve(__dirname, '../data/data.txt');

  async function read(task: number) {
    const toFile = resolve(__dirname, `../data/dataNew${task}.txt`);

    async function* toUpper(source: ReadStream) {
      for await (const chunk of source) yield chunk.toString().toUpperCase();
    }

    pipeline(
      // createReadStream(resolve(__dirname, '../data/data.txt')),
      // new Transform({
      //   transform(chunk, encoding, callback) {
      //     console.log(chunk.toString());
      //     this.push(chunk.toString().toUpperCase());
      //     callback();
      //   },
      // }),
      Readable.from(toUpper(createReadStream(fromFile))),
      createWriteStream(toFile),
      (err: NodeJS.ErrnoException | null) =>
        err
          ? console.error(err instanceof Error ? err.message : err)
          : console.log('pipeline successful'),
    );

    return `Task ${task} processed successfully`;
  }

  const tasks = [1, 2, 3, 4, 5, 6];

  async function processTasks() {
    const { results, errors } = await PromisePool.for(tasks)
      .withConcurrency(2)
      .process(read);

    if (errors.length > 0) {
      console.error('Errors occurred during processing:');
      errors.forEach((error) => console.error(error.message)); // Displaying errors
    }

    return results;
  }
  const promisesResult = await processTasks();

  console.log(promisesResult);

  console.timeEnd('[Log]Start execution app');
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});

/* promise-pool
const tasks = [1, 2, 3, 4, 5, 6];

  async function processTask(task: number) {
    if (task === 3) {
      // Simulating error of task number 3
      throw new Error('Task 3 failed');
    }
    return `Task ${task} processed successfully`;
  }

  async function processTasks() {
    const { results, errors } = await PromisePool.for(tasks)
      .withConcurrency(2)
      .process(processTask);

    // console.log(results);

    if (errors.length > 0) {
      console.error('Errors occurred during processing:');
      errors.forEach((error) => console.error(error.message)); // Displaying errors
    }

    return results;
  }
  const promisesResult = await processTasks();

  console.log(promisesResult);
*/

/* Promise.allSettled
 async function processTask(task: number) {
    if (task === 3) {
      // Simulating error of task number 3
      throw new Error('Task 3 failed');
    }
    return `Task ${task} processed successfully`;
  }

  const resultPromise = await Promise.allSettled(
    [1, 2, 3, 4].map((el) => processTask(el)),
  );

  const test: unknown[] = [...resultPromise];
  const filtered = test.filter(
    (value): value is { status: string; value?: string; reason?: Error } =>
      typeof value === 'object' && !!value,
  );
  filtered.forEach((el) =>
    console.log(el.status, el.value || el.reason?.message),
  );
*/

/*
const addition = (a: number, b: number): number => {
    return a + b;
  };

  const number1: number = 5;
  const number2: number = 10;
  const result: number = addition(number1, number2);

  console.log(`The application name is "${process.env.APP_NAME}"`);

  console.log('The result is %d', result);

*/
// const data = readFileSync(resolve(__dirname, `../data/data.xml`), {
//   encoding: 'utf-8',
// });
