export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col gap-2">
                <p>{`HI, I'M`}</p>
                <h2 className="text-4xl font-bold text-slate-300">Mritunjay</h2>
                <p className="text-2xl font-extrabold text-blue-300">
                    Fullstack Developer
                </p>
            </div>
            <div>
                <h3 className="home-page-title">Projects</h3>
            </div>

            <div>
                <h3 className="home-page-title">Blogs</h3>
            </div>
        </main>
    );
}
