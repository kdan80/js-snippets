const debounce = (fn: Function, timeout = 300) => {
    let ticker: ReturnType<typeof setTimeout>;
    return function (this: unknown, ...args: unknown[]) {
      clearTimeout(ticker);
      ticker = setTimeout(() => fn.apply(this, args), timeout);
    }
}
  