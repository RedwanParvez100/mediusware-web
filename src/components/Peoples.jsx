import React from "react";

const Peoples = () => {
    return (
        <div className="bg-[#F0F8FF] p-20">
            <div className="container mx-auto mt-10 text-center py-16">
                <h1 className="text-6xl font-bold">
                    What the People{" "}
                    <span className="text-[#2EB8A2]">Are Saying</span>
                </h1>
                <br />
                <p>
                    Explore success stories from clients across a range of
                    industries, spanning from techpreneurs and start-
                    <br /> ups to established enterprises.
                </p>
            </div>
            <div className="card grid grid-cols-3 ml-24">
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <figure>
                        <img
                            className="h-[300px] p-5 bg-white"
                            src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pLCjlkWQzzizoVWQkTrshvT8zPqIdDBPTlniFXQ~b~NkexqoWd0ihVJHCFow51LaFKCyl~gAH0W-28mwukAMegP1ydVWdbxyinMLG1klyEIMtfKQAl4QAiidki3AuXKYtorxdcxT7fvJEYrumnsETJQZz4ibeiS1S5yE2MMx3TteN6kzDkwAV9NEs53gSOrdtmfa20-MY7PPaUSranGMm76JNjOXM8DUgDM6nhMjwBeL8WKH7MK2Gdv1PJxCq6nAEq45Ok~x-8MRCDL98vdnS8mXnZZRcC75acx-iVlDOkxwuO-a~LHE89UbjYwOOuOPyPCYptrL~eG0g2jIv6z9uw__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">
                            Mediusware renewed our trust in outsourcing IT
                            development in the USA.
                        </h1>
                        <p className="font-bold">Jenny Wilson</p>
                        <p>CEO, Company Name</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className="h-[300px] p-5 bg-white"
                            src="https://s3-alpha-sig.figma.com/img/a4df/540e/d532a757f7324d13f4bd2f1fe2f47ea8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cySadVhFUDuch0aEmiCXf4d5DJd~T64EHzRWsMLYhpBiet9SiaF4q1CVVIu0r0RP5FHY2E-wmeWz~Z9pHq95GpFNaXTb4xiIma8O1ghYWbRQbH0aFJw1en4UmYj2h3DqJkOcg~LBu9Dl1dvOQmFiA6G0N9DA2asCITlDomrsJ6nILw1Tux7gVOjSdWrju1NTB9FZpFr126oavUZFV07xb5KhSF8ITd1b3cEikRQnu0REKDxk2l~rTfBY-fEIUzpy8i0xIMPVIUsylUAnNMCXJtB88yfH1jXnaH28x-Kr7R8cm1OHt31RS~HPt1bVXWCA~dN6RPDLQvNmOYhk571QMA__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">
                            Banking the unbanked with the help of Mediusware
                            developers.
                        </h1>
                        <p className="font-bold">Courtney Henry</p>
                        <p>CTO, Company Name</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className="h-[300px] p-5 bg-white"
                            src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9~znrRze7zzQ117Tt2HutwF53cB6Yz0jniZyA0cWUVuMK-3w3HCZ~LGh3qy~4qJCBnOT7eHfWAxlBIMI3lO8qzCs3yYPjRHQCxvE41KCCP1~bZ0aczWhZe-79A1e2LrjCe~~4ytkAheo2nlYlblFku7zYcgBC3jDk71WTGlrp58QYQj4M266dPHcjC9da6lIGHe7pqWM3-2vYfva6zhJ6ecZvsj6lAGqz4vDSQ7FPbpndcTCI2R5BcPYwLmb79SzbNyMCuiDgnwyZu8I5HoKSCKa9UdsqIVRYxBSUoGMiNV-8MYGgmVcNM9Gt83hf4AkVDfx2Tq4n5GBz~TuRM7uA__"
                            alt=""
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">
                            Our Digital Transformation Journey Fueled by
                            Top-Tier IT Solutions by Mediusware Ltd.
                        </h1>
                        <p className="font-bold">Kristin Watson</p>
                        <p>Director, Company Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peoples;
