import { getAllPostIds } from "../../lib/posts";
import Layout from "../components/layout";

export default function Post({data}) {
    return <div>
        <h1>Dynamic Routes</h1>
        {/* <ul>{data.map(({id, title, body})=>( */}
            <li key={data.id}>{data.id} --&gt; {data.title}<br />{data.body}</li>
        {/* ))} */}
        {/* </ul> */}
    </div>
}

export async function getStaticPaths() {
    const posts = await getAllPostIds();
    const paths = posts.map((res)=> {
        return {
            params: {
                id: res.id.toString()
            }
        };
    });
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps(cc) {
    const id = cc.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result =  await res.json();
    return {
        props: {
            data: result
        }
    }
}