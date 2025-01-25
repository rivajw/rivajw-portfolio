/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/Project.module.css";
import { motion } from "framer-motion";

const Project = ({ pinnedItems }) => {
  return (
    <div className={style.project}>
      <div className={style.project_container}>
        <p>//Top project</p>
        <div className={style.project_card_container}>
          {pinnedItems.map((item) => {
            return (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  },
                }}
                className={style.project_card}
                whileHover={{
                  transition: {
                    duration: 0.2,
                  },
                  filter: [
                    "hue-rotate(0)",
                    "hue-rotate(360deg)",
                    "hue-rotate(45deg)",
                    "hue-rotate(0)",
                  ],
                }}
                key={item.id}
              >
                <div className={style.project_card_top}>
                  <div className={style.project_card_head}>
                    <div>
                      <p>{item.name}</p>
                    </div>
                    {/* <div>
                      <span>⭐{item.stargazerCount}</span>
                    </div> */}
                  </div>
                  <div className={style.project_card_body}>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className={style.project_card_bottom}>
                  <div>
                    <a href={item.url} rel="noreferrer" target="_blank">
                      Check in Github
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Replace getStaticProps to return hardcoded data
export async function getStaticProps() {
  const pinnedItems = [
    {
      id: "1",
      name: "Hybrid Transactional/Analytical Processing Using Epoxy",
      url: "https://github.com/EC528-Fall-2024/hybrid-tx-analytical-epoxy",
      description: "Used Epoxy to build an HTAP system",
    },
    {
      id: "2",
      name: "Autonomous Vehicle Directed Study",
      url: "https://github.com/F1TenthBU",
      description: "Mainly focused on Simulation, Classic Control, and High-level Vision Parts",
    },
    {
      id: "3",
      name: "Evidence Analysis Tool for Human Trafficking Investigators",
      url: "https://github.com/BU-Spark/ml-mit-evidence-analysis/tree/dev",
      description: "An analytic software aiming at automatic processing of images to extract risk signs of human trafficking",
    },
    {
        id: "4",
        name: "SubGaurdian",
        url: "https://github.com/nmedeu/SubDomainTakeover",
        description: "A subdomain takeover vulnerability detection and prevention tool",
    },
    {
        id: "5",
        name: "BPD Budget Expenditure Analysis",
        url: "https://github.com/BU-Spark/ds-police-overtime/tree/main/fa23-team-e",
        description: "BPD Budget Expenditure Analysis, with possible reasons and future prediction",
    },
    {
        id: "6",
        name: "Aamir A Faruqui MD Inc.",
        url: "https://github.com/rivajw/CS-103-final-project",
        description: "A website for a private medical clinic"
    },
  ];

  return {
    props: { pinnedItems },
  };
}

export default Project;
