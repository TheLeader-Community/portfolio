
export function ChangeFile({ forElement, icon }: { forElement: string, icon:any }) {
    return (
        <label htmlFor={forElement} className=" absolute bottom-0 right-0 bg-emerald-500 rounded-full size-12 flex justify-center items-center text-white">
            {icon}
        </label>
    )
}