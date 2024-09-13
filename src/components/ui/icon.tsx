import {ComponentProps, ComponentPropsWithoutRef, ComponentType, forwardRef} from "react"
import {cn} from "@/lib/utils"
import {Check, ChevronRight, Menu, X} from "lucide-react"

export const Icon = {
  nav: {
    sub: cns(ChevronRight),
    menu: cns(Menu, "transition-[opacity] duration-300 ease-in-out"),
    close: cns(X, "transition-[opacity] duration-300 ease-in-out")
  },
  check: cns(Check),
  arrow: cns(Arrow, "h-fit fill-amber-500 z-10 rotate-180")
}

function cns<T extends ComponentType<any>>(Component: T, predefined?: string) {
  // @ts-ignore
  return forwardRef(function Icon({className, ...props}: ComponentProps<T>, ref) {
    // @ts-ignore
    return <Component className={cn("h-4 w-4 shrink-0", predefined, className)} {...props} ref={ref}/>
  }) as ComponentType<any> & { className?: string }
}


function Arrow(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1024 1024" preserveAspectRatio="none" {...props}>
      <path fill="evenodd" clipRule="evenodd" d="M1001.244444 830.577778c8.533333 2.844444 11.377778 11.377778 8.533334 17.066666-2.844444 8.533333-11.377778 11.377778-17.066667 8.533334-8.533333-2.844444-19.911111-5.688889-28.444444-8.533334-8.533333-2.844444-11.377778-11.377778-8.533334-17.066666 2.844444-8.533333 11.377778-11.377778 17.066667-8.533334 11.377778 5.688889 19.911111 8.533333 28.444444 8.533334z m-79.644444-25.6c8.533333 2.844444 11.377778 11.377778 8.533333 17.066666-2.844444 8.533333-11.377778 11.377778-17.066666 8.533334-8.533333-2.844444-17.066667-5.688889-25.6-11.377778-8.533333-2.844444-11.377778-11.377778-8.533334-19.911111 2.844444-8.533333 11.377778-11.377778 19.911111-8.533333 5.688889 8.533333 14.222222 11.377778 22.755556 14.222222z m-76.8-34.133334c5.688889 2.844444 8.533333 11.377778 5.688889 19.911112-2.844444 5.688889-11.377778 8.533333-19.911111 5.688888-8.533333-5.688889-17.066667-8.533333-25.6-14.222222-5.688889-2.844444-8.533333-11.377778-5.688889-19.911111 2.844444-5.688889 11.377778-8.533333 19.911111-5.688889 11.377778 5.688889 17.066667 11.377778 25.6 14.222222z m-71.111111-42.666666c5.688889 5.688889 8.533333 14.222222 2.844444 19.911111s-14.222222 8.533333-19.911111 2.844444c-8.533333-5.688889-17.066667-11.377778-22.755555-17.066666-5.688889-5.688889-8.533333-14.222222-2.844445-19.911111s14.222222-8.533333 19.911111-2.844445c8.533333 5.688889 14.222222 11.377778 22.755556 17.066667zM711.111111 676.977778c5.688889 5.688889 5.688889 14.222222 0 19.911111-5.688889 5.688889-14.222222 5.688889-19.911111 0l-19.911111-19.911111c-5.688889-5.688889-5.688889-14.222222 0-19.911111 5.688889-5.688889 14.222222-5.688889 19.911111 0l19.911111 19.911111z m-54.044444-65.422222c5.688889 5.688889 2.844444 14.222222-2.844445 19.911111-5.688889 5.688889-14.222222 2.844444-19.911111-2.844445l-17.066667-25.6c-2.844444-5.688889-2.844444-14.222222 5.688889-19.911111 5.688889-2.844444 14.222222-2.844444 19.911111 5.688889 2.844444 8.533333 8.533333 14.222222 14.222223 22.755556zM617.244444 540.444444c2.844444 8.533333 0 14.222222-8.533333 19.911112-8.533333 2.844444-14.222222 0-19.911111-8.533334-2.844444-8.533333-8.533333-19.911111-11.377778-28.444444-2.844444-8.533333 2.844444-14.222222 8.533334-17.066667 8.533333-2.844444 14.222222 2.844444 17.066666 8.533333 5.688889 8.533333 8.533333 17.066667 14.222222 25.6z m-22.755555-79.644444c0 8.533333-5.688889 14.222222-14.222222 14.222222s-14.222222-5.688889-14.222223-14.222222v-31.288889c0-8.533333 8.533333-14.222222 17.066667-11.377778 8.533333 0 14.222222 8.533333 11.377778 17.066667v25.6z m19.911111-71.111111c-5.688889 5.688889-14.222222 8.533333-19.911111 2.844444-5.688889-5.688889-8.533333-14.222222-2.844445-19.911111 8.533333-8.533333 14.222222-17.066667 25.6-22.755555 5.688889-2.844444 14.222222-2.844444 19.911112 5.688889 2.844444 5.688889 2.844444 14.222222-5.688889 19.911111-8.533333 0-14.222222 5.688889-17.066667 14.222222z m65.422222-36.977778c-8.533333 2.844444-14.222222-2.844444-17.066666-11.377778-2.844444-8.533333 2.844444-14.222222 11.377777-17.066666 11.377778-2.844444 19.911111-5.688889 31.288889-5.688889 8.533333 0 14.222222 5.688889 14.222222 14.222222s-5.688889 14.222222-14.222222 14.222222c-8.533333 2.844444-17.066667 2.844444-25.6 5.688889z m71.111111 8.533333c-5.688889-5.688889-8.533333-14.222222-2.844444-19.911111s14.222222-8.533333 19.911111-2.844444c8.533333 5.688889 17.066667 14.222222 22.755556 25.6 2.844444 5.688889 2.844444 14.222222-5.688889 19.911111-5.688889 2.844444-14.222222 2.844444-19.911111-5.688889-5.688889-8.533333-8.533333-14.222222-14.222223-17.066667z m28.444445 68.266667c0-8.533333 5.688889-14.222222 14.222222-14.222222s14.222222 5.688889 14.222222 14.222222v31.288889c0 8.533333-8.533333 14.222222-14.222222 14.222222-8.533333 0-14.222222-8.533333-14.222222-14.222222v-31.288889z m-8.533334 79.644445c2.844444-8.533333 8.533333-11.377778 17.066667-11.377778 8.533333 2.844444 11.377778 8.533333 11.377778 17.066666-2.844444 8.533333-5.688889 19.911111-8.533333 28.444445-2.844444 8.533333-11.377778 11.377778-17.066667 8.533333-8.533333-2.844444-11.377778-11.377778-8.533333-17.066666 0-8.533333 2.844444-17.066667 5.688888-25.6zM739.555556 585.955556c2.844444-5.688889 11.377778-8.533333 19.911111-5.688889 5.688889 2.844444 8.533333 11.377778 5.688889 19.911111-5.688889 8.533333-8.533333 17.066667-14.222223 25.6-2.844444 5.688889-11.377778 8.533333-19.911111 5.688889-5.688889-2.844444-8.533333-11.377778-5.688889-19.911111 5.688889-8.533333 11.377778-17.066667 14.222223-25.6z m-42.666667 71.111111c5.688889-5.688889 14.222222-5.688889 19.911111-2.844445s5.688889 14.222222 2.844444 19.911111c-5.688889 8.533333-11.377778 14.222222-19.911111 22.755556-5.688889 5.688889-14.222222 5.688889-19.911111 0s-5.688889-14.222222 0-19.911111c2.844444-5.688889 11.377778-14.222222 17.066667-19.911111zM637.155556 711.111111c5.688889-5.688889 14.222222-2.844444 19.911111 2.844445 5.688889 5.688889 2.844444 14.222222-2.844445 19.911111l-25.6 17.066666c-5.688889 2.844444-14.222222 2.844444-19.911111-5.688889-2.844444-5.688889-2.844444-14.222222 5.688889-19.911111 8.533333-2.844444 17.066667-8.533333 22.755556-14.222222z m-71.111112 36.977778c8.533333-2.844444 14.222222 2.844444 17.066667 8.533333 2.844444 8.533333-2.844444 14.222222-8.533333 17.066667-8.533333 2.844444-19.911111 5.688889-28.444445 5.688889-8.533333 0-14.222222-2.844444-17.066666-11.377778 0-8.533333 2.844444-14.222222 11.377777-17.066667 8.533333 2.844444 17.066667 0 25.6-2.844444z m-79.644444 5.688889c8.533333 0 14.222222 8.533333 11.377778 14.222222 0 8.533333-8.533333 14.222222-14.222222 11.377778-11.377778 0-19.911111-2.844444-28.444445-5.688889-8.533333-2.844444-11.377778-8.533333-11.377778-17.066667 2.844444-8.533333 8.533333-11.377778 17.066667-11.377778 5.688889 8.533333 14.222222 8.533333 25.6 8.533334z m-79.644444-19.911111c5.688889 2.844444 11.377778 11.377778 5.688888 19.911111-2.844444 5.688889-11.377778 11.377778-19.911111 5.688889-8.533333-2.844444-17.066667-8.533333-25.6-14.222223-5.688889-2.844444-8.533333-14.222222-5.688889-19.911111 2.844444-5.688889 14.222222-8.533333 19.911112-5.688889 11.377778 5.688889 17.066667 8.533333 25.6 14.222223zM341.333333 688.355556c5.688889 5.688889 5.688889 14.222222 0 19.911111-5.688889 5.688889-14.222222 5.688889-19.911111 0-8.533333-5.688889-14.222222-14.222222-19.911111-19.911111-5.688889-5.688889-5.688889-14.222222 0-19.911112 5.688889-5.688889 14.222222-5.688889 19.911111 0 5.688889 8.533333 11.377778 14.222222 19.911111 19.911112zM284.444444 625.777778c5.688889 5.688889 2.844444 14.222222-2.844444 19.911111s-14.222222 2.844444-19.911111-2.844445c-5.688889-8.533333-11.377778-14.222222-17.066667-22.755555-5.688889-5.688889-2.844444-14.222222 2.844445-19.911111 5.688889-5.688889 14.222222-2.844444 19.911111 2.844444 5.688889 8.533333 11.377778 14.222222 17.066666 22.755556z m-48.355555-71.111111c2.844444 5.688889 2.844444 14.222222-5.688889 19.911111-5.688889 2.844444-14.222222 2.844444-19.911111-5.688889-5.688889-8.533333-8.533333-17.066667-14.222222-25.6-2.844444-5.688889 0-14.222222 5.688889-19.911111s14.222222 0 19.911111 5.688889c5.688889 8.533333 11.377778 17.066667 14.222222 25.6z m-34.133333-73.955556c2.844444 8.533333 0 14.222222-8.533334 19.911111-8.533333 2.844444-14.222222 0-19.911111-8.533333-2.844444-8.533333-5.688889-17.066667-11.377778-25.6-2.844444-8.533333 0-14.222222 8.533334-19.911111 8.533333-2.844444 14.222222 0 19.911111 8.533333 2.844444 8.533333 5.688889 17.066667 11.377778 25.6z m-34.133334-76.8c2.844444 8.533333 0 14.222222-8.533333 17.066667s-14.222222 0-17.066667-8.533334c-2.844444-8.533333-5.688889-17.066667-8.533333-28.444444-2.844444-8.533333 0-14.222222 8.533333-17.066667 8.533333-2.844444 14.222222 0 17.066667 8.533334 2.844444 11.377778 5.688889 19.911111 8.533333 28.444444zM142.222222 321.422222c0 8.533333-2.844444 17.066667-11.377778 19.911111-8.533333 2.844444-14.222222-2.844444-17.066666-8.533333-2.844444-8.533333-5.688889-17.066667-8.533334-28.444444-2.844444-8.533333 2.844444-14.222222 8.533334-17.066667 8.533333-2.844444 14.222222 2.844444 17.066666 8.533333 5.688889 8.533333 8.533333 17.066667 11.377778 25.6z m-25.6-79.644444c2.844444 5.688889-2.844444 14.222222-8.533333 17.066666s-17.066667-2.844444-17.066667-11.377777c-2.844444-8.533333-5.688889-17.066667-8.533333-28.444445-2.844444-5.688889 2.844444-14.222222 11.377778-17.066666 8.533333-2.844444 14.222222 2.844444 17.066666 11.377777 2.844444 8.533333 2.844444 17.066667 5.688889 28.444445z"></path>
      <path fill="evenodd" clipRule="evenodd" d="M48.355556 395.377778c-2.844444 8.533333-8.533333 11.377778-17.066667 11.377778-8.533333-2.844444-11.377778-8.533333-11.377778-17.066667l5.688889-28.444445c2.844444-8.533333 8.533333-11.377778 17.066667-11.377777 8.533333 2.844444 11.377778 8.533333 11.377777 17.066666l-5.688888 28.444445z m17.066666-82.488889c-2.844444 8.533333-8.533333 11.377778-17.066666 11.377778-8.533333-2.844444-11.377778-8.533333-11.377778-17.066667l5.688889-28.444444c2.844444-8.533333 8.533333-11.377778 17.066666-11.377778 8.533333 2.844444 14.222222 8.533333 14.222223 17.066666l-8.533334 28.444445zM85.333333 227.555556c-2.844444 8.533333-11.377778 14.222222-17.066666 11.377777-8.533333 0-14.222222-8.533333-11.377778-17.066666l5.688889-28.444445c2.844444-8.533333 8.533333-11.377778 17.066666-11.377778 8.533333 2.844444 11.377778 8.533333 11.377778 17.066667L85.333333 227.555556z m8.533334-28.444445c-5.688889-5.688889-5.688889-14.222222 0-19.911111 5.688889-5.688889 14.222222-5.688889 19.911111 0l19.911111 19.911111c5.688889 5.688889 5.688889 14.222222 0 19.911111-5.688889 2.844444-14.222222 5.688889-19.911111 0L93.866667 199.111111z m62.577777 56.888889c-5.688889-5.688889-5.688889-14.222222 0-19.911111 5.688889-5.688889 14.222222-5.688889 19.911112 0l19.911111 19.911111c5.688889 5.688889 5.688889 14.222222 0 19.911111s-14.222222 5.688889-19.911111 0L156.444444 256z m62.577778 59.733333c-5.688889-5.688889-5.688889-14.222222 0-19.911111 5.688889-5.688889 14.222222-5.688889 19.911111 0l19.911111 17.066667c5.688889 5.688889 5.688889 14.222222 0 19.911111-5.688889 5.688889-14.222222 5.688889-19.911111 0l-19.911111-17.066667z"></path>
    </svg>
  )
}
