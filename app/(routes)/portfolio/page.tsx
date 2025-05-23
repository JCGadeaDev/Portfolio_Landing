import TransitionPage from "@/Components/transition-page";
import ContainerPage from '@/Components/container';
import AvatarPortfolio from "@/Components/avatar-portfolio";
import CircleImage from "@/Components/circle-image";
import PortfolioBox from "@/Components/portfolio-box";
import { dataPortfolio } from "@/data";


const PortfolioPage = () => {
    return (
      <ContainerPage>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
  
        <div className="flex flex-col items-center justify-center h-full md:pl-20">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
          </h1>
  
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-6 md:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    );
  };
  
 
export default PortfolioPage;