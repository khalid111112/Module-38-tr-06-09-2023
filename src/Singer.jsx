export default function Singer({signer}){
    console.log(signer);
    return (
        <div>
            <h3>Singer:{signer.name}</h3>
            <p>age:{signer.age}</p>
        </div>
    )
}