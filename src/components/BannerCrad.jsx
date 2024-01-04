import cssStyle from '../css/bannerCard.module.css';
export default function BannerCard({item}) {
    return(
        <div className={cssStyle.bannerCard}>
            <img src={`/img/${item.bannerImg}`} alt="이미지"/>
        </div>
    )
}