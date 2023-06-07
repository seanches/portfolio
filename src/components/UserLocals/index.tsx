import Div from "common/Div";
import Section from "common/Section";
import { FC } from "react";
import styles from "./styles";
import { IUserLocalsProperties } from "./types";

const UserLocals: FC<IUserLocalsProperties | any> = (properties) => {
      return (
      <Div >
        <Section sx={styles.friendsList} id='friendsList'>

        </Section>
        <Div sx={styles.gap} id='gap' ></Div>
        <Section sx={styles.friendsList} id='following'>

        </Section>
        <Div sx={styles.gap} id='gap' ></Div>
      </Div>
    );
  };

export default UserLocals;
