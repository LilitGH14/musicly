import { TBrand } from '@/types/types';
import brandSongImg from '../../public/assets/img/brand-song/01.png';
import brandSongImg2 from '../../public/assets/img/brand-song/02.png';
import brandSongImg3 from '../../public/assets/img/brand-song/03.png';
import brandSongImg4 from '../../public/assets/img/brand-song/04.png';
import brandSongImg5 from '../../public/assets/img/brand-song/05.png';
import brandSongImg6 from '../../public/assets/img/brand-song/06.png';
import brandSongImg7 from '../../public/assets/img/brand-song/07.png';

const brand_data: TBrand[] = [
    {
        id: 1,
        songNum: "01",
        image: brandSongImg,
        songTitle: "Arcade Fire",
        songText: "Canadian rock group"
    },
    {
        id: 2,
        songNum: "02",
        image: brandSongImg2,
        songTitle: "Beastie Boys",
        songText: "American hip-hop"
    },
    {
        id: 3,
        songNum: "03",
        image: brandSongImg3,
        songTitle: "Blondie",
        songText: "American rock group"
    },
    {
        id: 4,
        songNum: "04",
        image: brandSongImg4,
        songTitle: "Black Sabbath",
        songText: "British rock group"
    },
    {
        id: 5,
        songNum: "05",
        image: brandSongImg5,
        songTitle: "Boy II Men",
        songText: "Hong Kong Folk"
    },
    {
        id: 6,
        songNum: "06",
        image: brandSongImg6,
        songTitle: "The Coasters",
        songText: "Canada band group"
    },
    {
        id: 7,
        songNum: "06",
        image: brandSongImg7,
        songTitle: "The Flamingos",
        songText: "Chicago rock group"
    },
]


export default brand_data;

