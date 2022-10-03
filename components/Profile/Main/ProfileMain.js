import ProfileMainTabs from "./ProfileMainTabs";
import ProfileMainHead from "./ProfileMainHead";
import { useState } from "react";

const DUMMY_DATA = {
  name: "محمد حسن آل بوغبیش عراقی",
  bio:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، " +
    " و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد  و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد  و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
};
export default function ProfileMain({ isEditable, data }) {
  const [expandedBio, setExpandedBio] = useState(true);

  // FIXME: this component is not showing properly in mobile view
  return (
    <>
      <ProfileMainHead
        // ONLINE
        // name={data.name}
        // bio={data.bio}
        //sid={data.sid}
        name={DUMMY_DATA.name}
        bio={DUMMY_DATA.bio}
        isEditable={isEditable}
        expanded={expandedBio}
        setExpanded={setExpandedBio}
      />
      <ProfileMainTabs
        isEditable={isEditable}
        onScroll={() => setExpandedBio(false)}
      />
    </>
  );
}
