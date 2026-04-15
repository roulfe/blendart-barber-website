

function TeamCard(props) {

    return(
            <div className="hover:scale-105 duration-300 cursor-pointer relative group">
                <img src={props.image} alt={props.alt} className="w-64 h-96 object-cover object-top rounded-t-3xl " />
                <p className="w-64 text-center bg-black text-white py-6 rounded-b-3xl">{props.name}</p>
                    <a className="absolute bottom-20 left-1/2 -translate-x-1/2 
                        opacity-0 translate-y-4 
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition duration-300 ease-out
                        bg-red-700 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-800" href={props.link} target="_blank" rel="noopener noreferrer">
                            Book Now
                    </a>
            </div>
    );
}

export default TeamCard;