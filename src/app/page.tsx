import Spline from "@splinetool/react-spline/next";

export default function Home() {
    return (
        <div className="h-screen w-full overflow-scroll text-black bg-white">
            <div className="py-4 text-center text-lg font-bold">
                <h1>Hello, I am FFun</h1>
            </div>
            <div className="">
                <Spline scene="https://prod.spline.design/Su7r6ZCJldnFNh0T/scene.splinecode" />
            </div>
            <div className="h-screen">
                <div className="uppercase border-b border-dashed pb-2 w-fit border-black px-4 pt-4">
                    Benefits
                </div>
                <div>Reasons to work with me</div>
                <div className="w-72">
                    <div className="w-10 h-10 border border-black"></div>
                    <div>Stunning</div>
                    <p>
                        FFun creates unique, eye-catching designs that grab
                        attention and leave a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}
