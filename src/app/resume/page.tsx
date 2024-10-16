import TypeWriter from "../components/TypeWriter";

export default function Resume(){
    const message = "hello";
    return(
        <div>
            <TypeWriter message={message} />
        </div>
    );
}