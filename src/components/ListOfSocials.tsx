// React imports.
import React from "react";


interface ListOfSocialsState {
    socials: {
        icon: string,
        url?: string
    }[]
}

const ListOfSocials: React.FC<ListOfSocialsState> = (props) => {
    return(
        <div className="hidden sm:block">
            <div className="z-10 fixed left-6 top-44 grid gap-6">
                { ( props.socials.map((item) => {
                    return(
                        <div>
                            <a href={ item.url } target="blank">
                                <img src={ item.icon } alt={ item.icon } className="w-[20px] h-[20px] cursor-pointer"/>
                            </a>
                        </div>
                    )
                } )) } 
                <div className="w-0.5 h-[360px] bg-white ml-2.5 "></div>
            </div>
        </div>
    );
}


export default ListOfSocials;
