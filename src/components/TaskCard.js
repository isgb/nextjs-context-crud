import { useReducer } from "react";

export const TaskCard = ({ task }) => {

    const router = useReducer();

    return (
        <div 
            style={{background: "#202020", color:"white"}}
            onClick={() => router.push(`/edit/${task.id}`)}
        >
            <h1>
                {task.title}
            </h1>
            <button>Borrar</button>
            <p>{task.description}</p>
        </div>
    );
};