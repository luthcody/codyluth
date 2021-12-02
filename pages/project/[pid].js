import Image from 'next/image';
import Head from 'next/head';
import Projects from '../../static/json/projects.json'

function writeKeyValuePair(pairs) {
  return pairs ? pairs.map((spec) => (<h5>{spec.key}: {spec.value}</h5>)) : ''
}

function writeDataSection(title, keyValuePairs) {
  return keyValuePairs ? (
      <>
        <h3 className="mt-4">{title}</h3>
        {writeKeyValuePair(keyValuePairs)}
      </>
    ) : '';
}

const Project = ({ project }) => {
  return (
    <div className="row">
      <Head>
        <title>{'Cody Luth - ' + project.name}</title>
      </Head>
      <div className="col-12 col-lg-6">
        <Image src={project.thumbnailImage} width={1200} height={700}/>
      </div>
      <div className="col-12 col-lg-6">
        <h2>{project.name}</h2>
        <h5>{project.description}</h5>

        {writeDataSection('Technical Specifications', project.technicalSpecs)}    
        {writeDataSection('Additional Information', project.additionalInfo)}    

        <div className="row justify-content-center mt-4">
          {project.url ? (
            <div className="col-12 col-sm-6 my-2">
              <a className="btn btn-primary w-100" href={project.url} target="_blank">Visit Website</a>
            </div>
          ) : ''}
          {project.githubUrl ? (
            <div className="col-12 col-sm-6 my-2">
              <a className="btn btn-primary w-100" href={project.githubUrl} target="_blank">View Repository</a>
            </div>
          ) : ''}
        </div>
      </div>

    </div>
  );
}

export async function getStaticProps({ params }) {
  const project = Projects.find((project) => project.id === params.pid);
  return { props: { project } }
}

export async function getStaticPaths() {
  const paths = Projects.map((project) => ({
    params: { pid: project.id }
  }));
  return { paths, fallback: false }
}

export default Project