import "./AddForm.css"
export default function AddForm(props){
    const {title, setTitle, saveTask, editId} = props;
    return(
        <>
            <p className="Header">To-Do List</p>
            <form onSubmit={saveTask}>
                <div className="form-control">
                    <input type="text" className="text-input" value={title} placeholder="What is your next task?" onChange={(e) => setTitle(e.target.value)}/>
                    <button type="submit" className="btn-submit">
                        {editId ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </>
    )
}