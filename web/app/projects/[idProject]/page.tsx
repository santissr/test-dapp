export default function Page({ params }: { params: { idProject: string } }) {
	return (
		<>
			<h1>hola soy el proyecto con Keypair:</h1>
			<p>{params.idProject} </p>
		</>
	);
}
