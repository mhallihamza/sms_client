
function ItemWithMenu({ item, handleDelete }: { item: any; handleDelete:any}) {
  return (
    <div className="bg-white flex flex-col border rounded-md w-36">
      <button className="border-b rounded-t-md py-1.5 hover:bg-slate-300">
        Edit
      </button>
      <button onClick={() => handleDelete(item.appointmentId)} className="py-1.5 hover:bg-slate-300 rounded-b-md">Delete</button>
    </div>
  );
}

export default ItemWithMenu