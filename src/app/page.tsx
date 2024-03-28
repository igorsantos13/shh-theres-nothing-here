import { Counter } from "@/Counter";

async function getData() {
  const endpoint = "https://api.github.com/users/igorsantos13";

  const response = await fetch(endpoint);

  return response.json();
}

interface DataProps {
  login: string;
  bio: string;
  twitter_username: string;
}

//we can use async on our main function as our component is running on server.
export default async function Home() {
  const data: DataProps = await getData();

  console.log(data);
  return (
    <div>
      <h1>teste</h1>

      <span>
        <strong>USERNAME:</strong> {data.login}
        <br />
      </span>
      <span>
        <strong>BIO:</strong> {data.bio}
        <br />
      </span>
      <span>
        <strong>TWITTER:</strong> {data.twitter_username}
        <br />
      </span>

      <Counter />
    </div>
  );
}
