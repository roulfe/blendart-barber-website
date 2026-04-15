import TeamCard from "./TeamCard.jsx";

function Team(){

    return(
        <section className="flex flex-wrap justify-center items-center gap-10 py-10 bg-(--Egg) h-screen">
            <TeamCard image="/src/assets/photos/Marlowe.jpg" name="Marlowe" alt="Profile picture of Marlowe" link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c" />
            <TeamCard image="/src/assets/photos/Dom2.jpg" name="Dominic" alt="Profile picture of Dominic" link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c" />
            <TeamCard image="/src/assets/photos/Mo.jpg" name="Mo" alt="Profile picture of Mo" link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c" />
            <TeamCard image="/src/assets/photos/Ashley.jpg" name="Ashley" alt="Profile picture of Ashley" link="https://app.thecut.co/barbers/barberashley" />
            <TeamCard image="/src/assets/photos/Christina3.png" name="Christina" alt="Profile picture of Christina" link="https://booksy.com/en-us/709062_lady-barber-smalls_barber-shop_19304_frankfort?do=invite&_branch_match_id=1544832368508364856&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVzzdx9zI2y8mKjEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUASvLicTwAAAA%3D" />
        </section>
    );
}

export default Team;