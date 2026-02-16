import { Header } from "./components/header";
import { CardPrimaryLayout } from './components/layouts/card-primary-layout';
import { CardPrimary } from './components/card-primary';
 
export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <CardPrimaryLayout>
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
      </CardPrimaryLayout>
    </div>
  );
}
