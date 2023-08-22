import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";
import modelgtlf from "./images/model.gltf";
import greetingsFont from "./fonts/BebasNeue-Regular.ttf";
import potsdamerPlatzHDR from "./images/potsdamer_platz_1k.hdr";

export default function Experience() {
  const computer = useGLTF(modelgtlf);

  return (
    <>
      {/* area that will envelop the scene, also adds global light */}
      <Environment files={potsdamerPlatzHDR} />

      <color args={["#695b5b"]} attach="background" />
      {/* PresentationControls will make the laptop turn only so much. Polar for Y axis and Azimuth for X */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* illuminate the laptop with this light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"orangered"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          {/* the laptop model and iframe inside of it */}
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="actualPortfolio"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://lazarvell.github.io/portfolioThree/" />
            </Html>
          </primitive>
          <Text
            font={greetingsFont}
            fontSize={0.7}
            position={[2, 0.75, 0.2]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Portfolio of Lazar Velickovic
          </Text>
          <Text
            font={greetingsFont}
            fontSize={0.2}
            position={[0.8, 1.5, -2]}
            rotation-y={-0.1}
            rotation-z={0.1}
            maxWidth={2}
          >
            you can scroll the screen!
          </Text>
        </Float>
      </PresentationControls>
      {/* Shadow below the laptop */}
      <ContactShadows position-y={-1.4} opacity={0.5} scale={5} blur={2.4} />
    </>
  );
}
