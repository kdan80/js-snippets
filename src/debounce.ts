type Ticker = ReturnType<typeof setTimeout>
type Callback = (...args: Parameters<typeof Function>) => void
type Debounce<T extends Function> = (callback: T, timeout?: number) => () => void

export const debounce: Debounce<Callback> = (callback, timeout = 300) => {
    let ticker: Ticker
    return function <U>(this: U, ...args: Parameters<typeof callback>) {
      clearTimeout(ticker);
      ticker = setTimeout(() => callback.apply(this, args), timeout);
    }
}