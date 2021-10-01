import React, { Component } from 'react';
import CatInfo from './CatInfo'
class DisplayCat extends React.Component{
    state={
        text:[],
        imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",
        BSHInfo:"",

        PersianInfo:"",

        RagdollInfo:"",

        EgyptianInfo:"",

        DevonInfo:"",

        MaineInfo:"",
    }
    styles = {
        fontSize:50,
        fontWeight:"bold"
    };
    constructor(){
        super();
        this.handleDevon=this.handleDevon.bind(this);
        this.handleEgyptian=this.handleEgyptian.bind(this);
        this.handleMaine=this.handleMaine.bind(this);
        this.handlePersian=this.handlePersian.bind(this);
    }
    handleBSH=()=>{
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",

        BSHInfo:"British shorthair cats are very common, they are friendly, they are not particularly clingy, but they also enjoy people's care and love. They are loyal, but they don't like to stay on people's legs and prefer to squeeze next to you on the sofa. They are quieter, do not run around and jump around, and tolerate children and dogs. They don't like being hugged.",
        PersianInfo:"",
        RagdollInfo:"",
        EgyptianInfo:"",
        DevonInfo:"",
        MaineInfo:"",
    })
        this.setState( {imageBSH: "./resources/BSH.jpg"})
    }
    handleDevon(){
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",

        BSHInfo:"",
        PersianInfo:"",
        RagdollInfo:"",
        EgyptianInfo:"",
        DevonInfo:"Devon cat has a strange appearance and personality. They are smart, mischievous, and very active. They love to play and are good at jumping. They may appear anywhere you can't think of. They are very clingy and love to stay on people's legs. They are relatively quiet and can live in harmony with children and other pets. Don’t need to comb the hair.",
        MaineInfo:"",
    
    })
        this.setState( {imageDevon: "./resources/dewen.jpg"})
    }
    handleMaine(){
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",

        BSHInfo:"",
        PersianInfo:"",
        RagdollInfo:"",
        EgyptianInfo:"",
        DevonInfo:"",
        MaineInfo:"Although Maine Coon cats are friendly to humans, they are not very clingy. They are more like an equal partner for people. They are easy-going, relaxed, barking, and can get along with children, dogs and other cats. Maine Coon cats are very tall and strong, with a body length of more than 100 cm (nose to tip of tail) and a weight of 10 kg. Designated as the state cat of Maine, USA."
    })
        this.setState( {imageMaine: "./resources/maine.jpg"})
    }
 
    handleEgyptian(){
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",

        BSHInfo:"",
        PersianInfo:"",
        RagdollInfo:"",
        EgyptianInfo:"Egyptian cats are sometimes considered alienated and shy. But for the owner, they can form a special emotional bond. They are very loyal. Egyptian cat has a keen sense of smell, hearing and vision. They are shy and sensitive, and are easily disturbed by sudden noises. Egyptian cat is one of the most flexible and agile breeds. Like to be outdoors.",
        DevonInfo:"",
        MaineInfo:"",
    })
        this.setState( {imageEgyptian: "./resources/egyptian.jpg"})
    }
    handlePersian(){
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",

        BSHInfo:"",
        PersianInfo:"Persian cats are sweet and gentle. They like a stable environment and are treated with gentleness. They don't like to move, play, and are quiet. They mainly rely on their big eyes to communicate. They do not require too much attention from people, can be alone at home, and are less courageous.",
        RagdollInfo:"",
        EgyptianInfo:"",
        DevonInfo:"",
        MaineInfo:"",
    })
        this.setState( {imagePersian: "./resources/persian.jpg"})

    }
    handleRagdoll = () =>{
        this.setState({ imageBSH: "",
        imageDevon:"",
        imageEgyptian:"",
        imageMaine:"",
        imagePersian:"",
        imageRagdoll:"",
    
        BSHInfo:"",
        PersianInfo:"",
        RagdollInfo:"Ragdolls cat is relaxed and happy, just like a child's doll. They are friendly, quiet, and seem relatively lazy. They are not very active, nor do they like to bark. Ragdolls are known for their endurance. They can bear to put on clothes and be held and walk around without resisting. Because of their friendliness and intelligence, they are often compared with dogs.",
        EgyptianInfo:"",
        DevonInfo:"",
        MaineInfo:"",
    })
        this.setState({imageRagdoll: "./resources/ragdoll.jpg"})
    }

    getButtonClassses(){
        let classes = "btn m-2 btn-"
        classes += this.state.imageBSH===""? "primary" :"warning"
        return classes;
    }
    render() { 
        return (
            <div>
                <span>{this.props.PersianInfo}</span>
                <p>
                <img src= {this.state.imageBSH} alt=""></img>
                <button onClick = {this.handleBSH} className={this.getButtonClassses()}>BSH </button>
                <p>{this.state.BSHInfo}</p>
                </p>

                <p>
                <img src= {this.state.imageDevon} alt=""></img>
                <button onClick = {this.handleDevon} className="btn btn-primary m-2">Devon</button>
                <p>{this.state.DevonInfo}</p>
                </p>

                <p>
                <img src= {this.state.imageEgyptian} alt=""></img>
                <button onClick = {this.handleEgyptian} className="btn btn-primary m-2">Egyptian</button>
                <p>{this.state.EgyptianInfo}</p>
                </p>

                <p>
                <img src= {this.state.imageMaine} alt=""></img>
                <button onClick = {this.handleMaine} className="btn btn-primary m-2">Maine</button>
                <p>{this.state.MaineInfo}</p>
                </p>

                <p>
                <img src= {this.state.imagePersian} alt=""></img>
                <button onClick = {this.handlePersian} className="btn btn-primary m-2">Persian</button>
                <p>{this.state.PersianInfo}</p>
                </p>
                
                <p>
                <img src= {this.state.imageRagdoll} alt=""></img>
                <button onClick = {this.handleRagdoll} className="btn btn-primary m-2">Ragdoll</button>
                <p>{this.state.RagdollInfo}</p>
                </p>


                 
            </div>
        );
    }
}
 
export default DisplayCat;