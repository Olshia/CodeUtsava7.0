import React from "react";
import { useState, useEffect } from "react";

import "./Section11.css";

import shortlistedTeams from "../../../../assets/data/shortlistedTeamsData";
import ShortlistedTeamCard from "../../../../components/shortlistedTeamCard/ShortlistedTeamCard";
import { motion } from "framer-motion";

const Section11 = () => {
  const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);
    useEffect(() => {
      if (show) setVisible(true);
    }, [show]);
    const onAnimationEnd = () => {
      if (!show) setVisible(false);
    };

    const style = {
      animation: `${
        show ? "fadeIn 1.5s ease-in-out" : "fadeOut 0.5s ease-in-out"
      }`,
    };
    const fadeProps = {
      style,
      onAnimationEnd,
    };
    return [isVisible, setShow, fadeProps];
  };
  const [isVisible, setVisible, fadeProps] = useFade(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section11"
      id="problems"
    >
      <div className="codeutsava__section11-body">
        <div className="codeutsava__section11-title">Shortlisted Teams</div>
        <div className="codeutsava__section11-problems">
          <div className="codeutsava__section11-problems-container1">
            {shortlistedTeams.map((shortlistedTeam, index) => (
              <ShortlistedTeamCard
                key={index}
                name={shortlistedTeam.name}
                leader={shortlistedTeam.leader}
                college={shortlistedTeam.college}
                member1={shortlistedTeam.member1}
                member2={shortlistedTeam.member2}
                member3={shortlistedTeam.member3}
                member4={shortlistedTeam.member4}
                member5={shortlistedTeam.member5}
                member6={shortlistedTeam.member6}
              />
            ))}
          </div>
          {isVisible && (
            <div
              className="codeutsava__section11-problems-container2"
              {...fadeProps}
            >
              {shortlistedTeams.map((shortlistedTeam, index) => (
                <shortlistedTeams
                  key={index}
                  name={shortlistedTeam.name}
                  leader={shortlistedTeam.leader}
                  college={shortlistedTeam.college}
                  member1={shortlistedTeam.member1}
                  member2={shortlistedTeam.member2}
                  member3={shortlistedTeam.member3}
                  member4={shortlistedTeam.member4}
                  member5={shortlistedTeam.member5}
                  member6={shortlistedTeam.member6}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Section11;
