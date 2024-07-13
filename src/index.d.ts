declare global {
  type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: object) => void
      reset: () => void
    }
  }
}

export {}
