

function Services(){

    return(
        <section className="bg-(--Egg) py-10 h-screen flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center my-10">
                Services
            </h2>
            <div className="flex flex-row space-x-10 text-center justify-evenly text-2xl font-semibold">
                <div className="space-y-10">
                    <p className="border-b pb-2">
                        Men's Cut:
                    </p>
                    <p className="border-b pb-2">
                        High School Teen:
                    </p>
                    <p className="border-b pb-2">
                        Kids 12 & under/Senior Citizen:
                    </p>
                    <p className="border-b pb-2">
                        Haircut + Beard/Goatee Trim:
                    </p>
                    <p className="border-b pb-2">
                        Haircut + Hot Towel Shave:
                    </p>
                </div>
                <div className="space-y-10">
                    <p className="border-b pb-2">
                        $35
                    </p>
                    <p className="border-b pb-2">
                        $30
                    </p>
                    <p className="border-b pb-2">
                        $25
                    </p>
                    <p className="border-b pb-2">
                        $45
                    </p>
                    <p className="border-b pb-2">
                        $55
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;