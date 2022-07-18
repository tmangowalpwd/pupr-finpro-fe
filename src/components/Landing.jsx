import Hero from "./Hero";
import Card from "./Card";
import Perumahan from "./Perumahan";
import Bendungan from "./Bendungan";
import Apbn from "./Apbn";
import Sdm from "./Sdm";
import Topbar from "./Topbar";
import mainBg from "../img/bg-main.png";

const Landing = () => {
    const description =
        "Kementerian Pekerjaan Umum dan Perumahan Rakyat mempunyai tugas menyelenggarakan urusan pemerintahan di bidang pekerjaan umum dan perumahan rakyat untuk membantu Presiden dalam menyelenggarakan pemerintahan negara.";
    const title = "Bakti PUPR Sigap Membangun Negeri";
    return (
        <div>
            <Topbar />
            <Hero image={mainBg} title={title} description={description} />
            <br />
            <br />
            <br />
            <Card />
            <br />
            <br />
            <br />
            <Perumahan />
            <br />
            <br />
            <br />
            <Bendungan />
            <br />
            <br />
            <br />
            <Apbn />
            <br />
            <br />
            <br />
            <Sdm />
        </div>
    );
};

export default Landing;
