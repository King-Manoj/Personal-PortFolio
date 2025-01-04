export default function HeroSection(){
    return  (
        <section id="heroSection" className = "hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Manoj</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                            <p className="hero--section-description">Innovative web developer and competitive programmer passionate about exploring new technologies, solving tough challenges, and constant self-growth.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/manoimg2.jpg" alt="Hero Section"  width={20}/>
            </div>

        </section>
    );
}