(function() {var implementors = {};
implementors["cranelift_codegen"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Block.html\" title=\"struct cranelift_codegen::ir::entities::Block\">Block</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Block"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Value.html\" title=\"struct cranelift_codegen::ir::entities::Value\">Value</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Inst.html\" title=\"struct cranelift_codegen::ir::entities::Inst\">Inst</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Inst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.StackSlot.html\" title=\"struct cranelift_codegen::ir::entities::StackSlot\">StackSlot</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::StackSlot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.DynamicStackSlot.html\" title=\"struct cranelift_codegen::ir::entities::DynamicStackSlot\">DynamicStackSlot</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::DynamicStackSlot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.DynamicType.html\" title=\"struct cranelift_codegen::ir::entities::DynamicType\">DynamicType</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::DynamicType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.GlobalValue.html\" title=\"struct cranelift_codegen::ir::entities::GlobalValue\">GlobalValue</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::GlobalValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Constant.html\" title=\"struct cranelift_codegen::ir::entities::Constant\">Constant</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Constant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Immediate.html\" title=\"struct cranelift_codegen::ir::entities::Immediate\">Immediate</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Immediate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.JumpTable.html\" title=\"struct cranelift_codegen::ir::entities::JumpTable\">JumpTable</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::JumpTable"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.FuncRef.html\" title=\"struct cranelift_codegen::ir::entities::FuncRef\">FuncRef</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::FuncRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.SigRef.html\" title=\"struct cranelift_codegen::ir::entities::SigRef\">SigRef</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::SigRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Heap.html\" title=\"struct cranelift_codegen::ir::entities::Heap\">Heap</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Heap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_codegen/ir/entities/struct.Table.html\" title=\"struct cranelift_codegen::ir::entities::Table\">Table</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::Table"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_codegen/ir/entities/enum.AnyEntity.html\" title=\"enum cranelift_codegen::ir::entities::AnyEntity\">AnyEntity</a>","synthetic":false,"types":["cranelift_codegen::ir::entities::AnyEntity"]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"cranelift_entity/packed_option/trait.ReservedValue.html\" title=\"trait cranelift_entity::packed_option::ReservedValue\">ReservedValue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_entity/packed_option/struct.PackedOption.html\" title=\"struct cranelift_entity::packed_option::PackedOption\">PackedOption</a>&lt;T&gt;","synthetic":false,"types":["cranelift_entity::packed_option::PackedOption"]}];
implementors["cranelift_interpreter"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_interpreter/environment/struct.FuncIndex.html\" title=\"struct cranelift_interpreter::environment::FuncIndex\">FuncIndex</a>","synthetic":false,"types":["cranelift_interpreter::environment::FuncIndex"]}];
implementors["cranelift_isle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/ast/struct.Ident.html\" title=\"struct cranelift_isle::ast::Ident\">Ident</a>","synthetic":false,"types":["cranelift_isle::ast::Ident"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/ir/struct.InstId.html\" title=\"struct cranelift_isle::ir::InstId\">InstId</a>","synthetic":false,"types":["cranelift_isle::ir::InstId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_isle/ir/enum.Value.html\" title=\"enum cranelift_isle::ir::Value\">Value</a>","synthetic":false,"types":["cranelift_isle::ir::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_isle/ir/enum.PatternInst.html\" title=\"enum cranelift_isle::ir::PatternInst\">PatternInst</a>","synthetic":false,"types":["cranelift_isle::ir::PatternInst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_isle/ir/enum.ExprInst.html\" title=\"enum cranelift_isle::ir::ExprInst\">ExprInst</a>","synthetic":false,"types":["cranelift_isle::ir::ExprInst"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/ir/struct.ExprSequence.html\" title=\"struct cranelift_isle::ir::ExprSequence\">ExprSequence</a>","synthetic":false,"types":["cranelift_isle::ir::ExprSequence"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/lexer/struct.Pos.html\" title=\"struct cranelift_isle::lexer::Pos\">Pos</a>","synthetic":false,"types":["cranelift_isle::lexer::Pos"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.Sym.html\" title=\"struct cranelift_isle::sema::Sym\">Sym</a>","synthetic":false,"types":["cranelift_isle::sema::Sym"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.TypeId.html\" title=\"struct cranelift_isle::sema::TypeId\">TypeId</a>","synthetic":false,"types":["cranelift_isle::sema::TypeId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.VariantId.html\" title=\"struct cranelift_isle::sema::VariantId\">VariantId</a>","synthetic":false,"types":["cranelift_isle::sema::VariantId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.FieldId.html\" title=\"struct cranelift_isle::sema::FieldId\">FieldId</a>","synthetic":false,"types":["cranelift_isle::sema::FieldId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.TermId.html\" title=\"struct cranelift_isle::sema::TermId\">TermId</a>","synthetic":false,"types":["cranelift_isle::sema::TermId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.RuleId.html\" title=\"struct cranelift_isle::sema::RuleId\">RuleId</a>","synthetic":false,"types":["cranelift_isle::sema::RuleId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_isle/sema/struct.VarId.html\" title=\"struct cranelift_isle::sema::VarId\">VarId</a>","synthetic":false,"types":["cranelift_isle::sema::VarId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_isle/trie/enum.TrieSymbol.html\" title=\"enum cranelift_isle::trie::TrieSymbol\">TrieSymbol</a>","synthetic":false,"types":["cranelift_isle::trie::TrieSymbol"]}];
implementors["cranelift_module"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_module/struct.FuncId.html\" title=\"struct cranelift_module::FuncId\">FuncId</a>","synthetic":false,"types":["cranelift_module::module::FuncId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cranelift_module/struct.DataId.html\" title=\"struct cranelift_module::DataId\">DataId</a>","synthetic":false,"types":["cranelift_module::module::DataId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"cranelift_module/enum.FuncOrDataId.html\" title=\"enum cranelift_module::FuncOrDataId\">FuncOrDataId</a>","synthetic":false,"types":["cranelift_module::module::FuncOrDataId"]}];
implementors["wasi_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/dir/struct.DirCaps.html\" title=\"struct wasi_common::dir::DirCaps\">DirCaps</a>","synthetic":false,"types":["wasi_common::dir::DirCaps"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.FdFlags.html\" title=\"struct wasi_common::file::FdFlags\">FdFlags</a>","synthetic":false,"types":["wasi_common::file::FdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.SdFlags.html\" title=\"struct wasi_common::file::SdFlags\">SdFlags</a>","synthetic":false,"types":["wasi_common::file::SdFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.SiFlags.html\" title=\"struct wasi_common::file::SiFlags\">SiFlags</a>","synthetic":false,"types":["wasi_common::file::SiFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.RiFlags.html\" title=\"struct wasi_common::file::RiFlags\">RiFlags</a>","synthetic":false,"types":["wasi_common::file::RiFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.RoFlags.html\" title=\"struct wasi_common::file::RoFlags\">RoFlags</a>","synthetic":false,"types":["wasi_common::file::RoFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.OFlags.html\" title=\"struct wasi_common::file::OFlags\">OFlags</a>","synthetic":false,"types":["wasi_common::file::OFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/file/struct.FileCaps.html\" title=\"struct wasi_common::file::FileCaps\">FileCaps</a>","synthetic":false,"types":["wasi_common::file::FileCaps"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/sched/subscription/struct.RwEventFlags.html\" title=\"struct wasi_common::sched::subscription::RwEventFlags\">RwEventFlags</a>","synthetic":false,"types":["wasi_common::sched::subscription::RwEventFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Rights.html\" title=\"struct wasi_common::snapshots::preview_0::types::Rights\">Rights</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Rights"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Fdflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Fdflags\">Fdflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Fdflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Fstflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Fstflags\">Fstflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Fstflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Lookupflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Lookupflags\">Lookupflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Lookupflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Oflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Oflags\">Oflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Oflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Eventrwflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Eventrwflags\">Eventrwflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Eventrwflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Subclockflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Subclockflags\">Subclockflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Subclockflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Riflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Riflags\">Riflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Riflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Roflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Roflags\">Roflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Roflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_0/types/struct.Sdflags.html\" title=\"struct wasi_common::snapshots::preview_0::types::Sdflags\">Sdflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_0::types::Sdflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Rights.html\" title=\"struct wasi_common::snapshots::preview_1::types::Rights\">Rights</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Rights"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Fdflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Fdflags\">Fdflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Fdflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Fstflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Fstflags\">Fstflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Fstflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Lookupflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Lookupflags\">Lookupflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Lookupflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Oflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Oflags\">Oflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Oflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Eventrwflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Eventrwflags\">Eventrwflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Eventrwflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Subclockflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Subclockflags\">Subclockflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Subclockflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Riflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Riflags\">Riflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Riflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Roflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Roflags\">Roflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Roflags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasi_common/snapshots/preview_1/types/struct.Sdflags.html\" title=\"struct wasi_common::snapshots::preview_1::types::Sdflags\">Sdflags</a>","synthetic":false,"types":["wasi_common::snapshots::preview_1::types::Sdflags"]}];
implementors["wasmtime_runtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_runtime/struct.CompiledModuleId.html\" title=\"struct wasmtime_runtime::CompiledModuleId\">CompiledModuleId</a>","synthetic":false,"types":["wasmtime_runtime::module_id::CompiledModuleId"]}];
implementors["wasmtime_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.FuncIndex.html\" title=\"struct wasmtime_types::FuncIndex\">FuncIndex</a>","synthetic":false,"types":["wasmtime_types::FuncIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.DefinedFuncIndex.html\" title=\"struct wasmtime_types::DefinedFuncIndex\">DefinedFuncIndex</a>","synthetic":false,"types":["wasmtime_types::DefinedFuncIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.DefinedTableIndex.html\" title=\"struct wasmtime_types::DefinedTableIndex\">DefinedTableIndex</a>","synthetic":false,"types":["wasmtime_types::DefinedTableIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.DefinedMemoryIndex.html\" title=\"struct wasmtime_types::DefinedMemoryIndex\">DefinedMemoryIndex</a>","synthetic":false,"types":["wasmtime_types::DefinedMemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.OwnedMemoryIndex.html\" title=\"struct wasmtime_types::OwnedMemoryIndex\">OwnedMemoryIndex</a>","synthetic":false,"types":["wasmtime_types::OwnedMemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.DefinedGlobalIndex.html\" title=\"struct wasmtime_types::DefinedGlobalIndex\">DefinedGlobalIndex</a>","synthetic":false,"types":["wasmtime_types::DefinedGlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.TableIndex.html\" title=\"struct wasmtime_types::TableIndex\">TableIndex</a>","synthetic":false,"types":["wasmtime_types::TableIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.GlobalIndex.html\" title=\"struct wasmtime_types::GlobalIndex\">GlobalIndex</a>","synthetic":false,"types":["wasmtime_types::GlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.MemoryIndex.html\" title=\"struct wasmtime_types::MemoryIndex\">MemoryIndex</a>","synthetic":false,"types":["wasmtime_types::MemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.SignatureIndex.html\" title=\"struct wasmtime_types::SignatureIndex\">SignatureIndex</a>","synthetic":false,"types":["wasmtime_types::SignatureIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.DataIndex.html\" title=\"struct wasmtime_types::DataIndex\">DataIndex</a>","synthetic":false,"types":["wasmtime_types::DataIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.ElemIndex.html\" title=\"struct wasmtime_types::ElemIndex\">ElemIndex</a>","synthetic":false,"types":["wasmtime_types::ElemIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.TypeIndex.html\" title=\"struct wasmtime_types::TypeIndex\">TypeIndex</a>","synthetic":false,"types":["wasmtime_types::TypeIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmtime_types/struct.TagIndex.html\" title=\"struct wasmtime_types::TagIndex\">TagIndex</a>","synthetic":false,"types":["wasmtime_types::TagIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"wasmtime_types/enum.EntityIndex.html\" title=\"enum wasmtime_types::EntityIndex\">EntityIndex</a>","synthetic":false,"types":["wasmtime_types::EntityIndex"]}];
implementors["wiggle_test"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wiggle_test/struct.MemArea.html\" title=\"struct wiggle_test::MemArea\">MemArea</a>","synthetic":false,"types":["wiggle_test::MemArea"]}];
implementors["witx"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"witx/struct.SizeAlign.html\" title=\"struct witx::SizeAlign\">SizeAlign</a>","synthetic":false,"types":["witx::layout::SizeAlign"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()