import { useEffect, useState, memo } from "react";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";

import { ButtonToProfile, Container, Infos, Picture } from "./styles";

const GitHubProfileCard = ({ username }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);

  return (
    <Container>
      <Picture src={user.avatar_url} atl={user.login} title={user.login} />
      <Infos>
        <h3>{user.name ? user.name : "Nome não disponível"}</h3>
        <small>{user.bio ? user.bio : "Biografia não disponível"}</small>

        <div className="details">
          <div>
            <MdOutlineLocationOn size={20} />
            <p>{user.location ? user.location : 'Localização não disponível'}</p>
          </div>
          <div>
            <RiBuildingLine size={20} />
            <p>{user.company ? user.company : 'Empresa não disponível'}</p>
          </div>
          <div>
            <MdOutlineMail size={20} />
            <p>{user.email ? user.email : 'E-mail não disponível'}</p>
          </div>
        </div>
      </Infos>
      <ButtonToProfile>
        <a href={`https://github.com/${username}`} target="_blank">Ir para o perfil</a>
      </ButtonToProfile>
    </Container>
  );
};

export default memo(GitHubProfileCard);
