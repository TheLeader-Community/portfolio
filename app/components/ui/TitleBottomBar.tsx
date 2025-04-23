
export default function TitleBottomBar({ children }: { children: string }) {
    return (
        <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-3xl md:text-4xl font-bold">{children}</h1>
            <div className=" skeleton bg-blue-500 w-40 mt-3 h-3 rounded-full"></div>
        </div>
    )
}
