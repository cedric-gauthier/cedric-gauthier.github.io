import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";
import { CiMail } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";


export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="" alt="profile-picture">
          <RxAvatar className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">GAUTHIER Cédric</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Futur developpeur web</h2>
        </div>
      </div>

      <div>
        En cours ...
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://github.com/flamrdevs/astrolinkt" target="_blank" aria-label="GitHub">
          <Simple.IconGitHub />
          GitHub
        </Button>
      </div>
      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://github.com/flamrdevs/astrolinkt" target="_blank" aria-label="GitHub">
        <CiMail />
          Mail
        </Button>
      </div>
    </div>
  );
};
