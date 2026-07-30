(async (): Promise<void> => {
  console.log(process.env.TOKEN);
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});
