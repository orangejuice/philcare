import {defineDocumentType} from "contentlayer2/source-files"
import {makeSource} from "contentlayer2/source-remote-files"
import syncFiles from "./src/lib/google-drive-provider"

export const Candidate = defineDocumentType(() => ({
  name: "Candidate",
  filePathPattern: "**/candidate.md",
  fields: {
    name: {type: "string", required: true},
    role: {type: "string", required: true},
    availability: {type: "list", of: {type: "string"}, default: []},
    imagePath: {type: "string", required: true}
  },
  computedFields: {
    id: {type: "string", resolve: (post) => post._raw.sourceFileDir}
  }
}))

export default makeSource({
  contentDirPath: ".data",
  documentTypes: [Candidate],
  onExtraFieldData: "ignore",
  syncFiles
})
