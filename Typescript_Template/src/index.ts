(async (): Promise<void> => {
  const addition = (a: number, b: number): number => {
    return a + b;
  };

  const number1: number = 5;
  const number2: number = 10;
  const result: number = addition(number1, number2);

  console.log(`The application name is "${process.env.APP_NAME}"`);

  console.log('The result is %d', result);
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});
