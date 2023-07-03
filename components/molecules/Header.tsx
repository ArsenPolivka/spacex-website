import { Logo } from "../atoms/Logo";
import { Navigation } from "../atoms/Navigation";
import { Button } from "../atoms/Button";

export const Header = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <div>
        <Button />
        <Button />
      </div>
    </>
  )
}
