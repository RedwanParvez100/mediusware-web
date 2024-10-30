import React from "react";

const Projects = () => {
    return (
        <div className="mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        <h1 className="font-bold text-5xl mb-6">
                            Projects We’d Hang on{" "}
                            <span className="text-[#2EB8A2]">
                                Our Refrigerator
                            </span>
                        </h1>
                        <p>
                            Discover our latest work, showcasing innovative
                            solutions and successful collaborations that
                            highlight our expertise in <br /> delivering
                            high-quality software development projects.
                        </p>
                    </div>
                    <div className="col-span-2 flex items-end  justify-end">
                        <button className="btn btn-primary">See All</button>
                    </div>
                </div>
            </div>
            <div className="card grid grid-cols-3 ml-24 mt-10">
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <figure>
                        <img
                            className="h-[300px]"
                            src="https://s3-alpha-sig.figma.com/img/9a0c/6ee6/70499deb64fa0abd378303f7d3e7995b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f43CgkwHneawvbsSZHjHxGPoF6MJJZL-vuqaNRYLl5PNhR8bVOHRhUYTtBDqJxnSe4zEar~TJE750-JLFx5Y-UDOQ3SxIUvA3E9orHkdBmxglXcjNFRiBZZQKx1bf13EdUJDIjtGGNBAsjCsMRG2pyaGAIUEt1zux27dbuFiYa8ZaEyKlxH9Nuf2obTClxirjWGUzfs0JDuaGirO6j6bwawFnCR-XmbvJWof4AAA3UdXZtamAHhoJnduj6O3hTbAI0MJq0tkzRPfPDz2s-hWAXBg71VVpdmBZ7flRaFXBS8yOZxfQYOM39F6~pJLwpArNqGPPcRhNRaKQ61y4NNiyA__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body bg-[#F0F8FF]">
                        <h1 className="card-title">
                            GoThruhike Website Redesign
                        </h1>
                        <p className="">
                            Thruhike is the ultimate platform for discovering
                            and sharing your favorite places and products. Our
                            mission is to celebrate local business and inspire
                            new experiences.
                        </p>
                        <br />
                        <p>View Project</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <figure>
                        <img
                            className="h-[300px]"
                            src="https://s3-alpha-sig.figma.com/img/f3dc/d637/15503c2703643402258baa8f4b635cd8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6WkKrONt6TcO60PywiWeIx4ERUEmC7DIJBHgdlrzQ3UrFhaueBWhXSE18UGUUa1StOznmgmdmF-env~NWDG8FlU-18mPK372G4S~SmB8PVb66DZjVkViQ3aDiP-Z94aedhAvCkq5NqS72SrFbN~9EoaePtWmFtSsr8XtP4ab-h2nIBcUfkND8xqI-ErqztwyRNqTQ0BxEFDsszTl-Jrb7dKE4-6zL~T0JYSph09awR267yvr92~KgtQc2rUk3mIxUeT2Gqt7trE0exUKgjUfCLI~1IAdyQdoqRYmC2XD6DeTP50GBazSwTFeIwD-yxKoKmyRE-rwi4Qq8Iuh6l30Q__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body bg-[#F0F8FF]">
                        <h1 className="card-title">Gamezone Game Launcher</h1>
                        <p className="">
                            Game Launcher is a sleek desktop application
                            designed exclusively for gamers. It offers seamless
                            access to your favorite games, customizable
                            settings,
                        </p>
                        <p>View Project</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <figure>
                        <img
                            className="h-[300px]"
                            src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9~znrRze7zzQ117Tt2HutwF53cB6Yz0jniZyA0cWUVuMK-3w3HCZ~LGh3qy~4qJCBnOT7eHfWAxlBIMI3lO8qzCs3yYPjRHQCxvE41KCCP1~bZ0aczWhZe-79A1e2LrjCe~~4ytkAheo2nlYlblFku7zYcgBC3jDk71WTGlrp58QYQj4M266dPHcjC9da6lIGHe7pqWM3-2vYfva6zhJ6ecZvsj6lAGqz4vDSQ7FPbpndcTCI2R5BcPYwLmb79SzbNyMCuiDgnwyZu8I5HoKSCKa9UdsqIVRYxBSUoGMiNV-8MYGgmVcNM9Gt83hf4AkVDfx2Tq4n5GBz~TuRM7uA__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body bg-[#F0F8FF]">
                        <h1 className="card-title">Learn Here</h1>
                        <p className="">
                            LearnHere is the platform that presents all the
                            lessons from Beginner to Expert Level with live and
                            recorded classes.
                        </p>
                        <p>View Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
