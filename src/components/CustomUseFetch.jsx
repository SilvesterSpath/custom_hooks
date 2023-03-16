import useFetch from "../hooks/useFetch"

function CustomUseFetch() {
  const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  console.log(data);

  if (loading){
    return <h3>Loading..</h3>
  }

  return (
    <div>
      {data && data.map((i, idx)=>(
        <h3 key={i.id}>{i.title}</h3>
      ))}
    </div>
  )
}

export default CustomUseFetch
