import '@google/model-viewer';

const Model = () => (
  <div className="cnt_model">
    <model-viewer
      class="model"
      src="/3d-model.glb"
      ios-src=""
      alt="Modello 3D di un Cannolo"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default Model;
