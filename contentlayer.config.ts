import {defineDocumentType, makeSource} from "contentlayer2/source-files"


export const Candidate = defineDocumentType(() => ({
  name: "Candidate",
  filePathPattern: "candidates/*.md",
  fields: {
    name: {type: "string", required: true},
    role: {type: "string", required: true},
    img: {type: "string", required: true}
  },
  computedFields: {
    id: {type: "string", resolve: (post) => post._raw.sourceFileName.split(".")[1]}
  }
}))

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Candidate],
  onExtraFieldData: "ignore"
})
