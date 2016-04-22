var searchIndex = {};
searchIndex["serde_pickle"] = {"doc":"Serialization and deserialization for Python&#39;s pickle format","items":[[5,"to_value","serde_pickle","Serialize any serde serializable object into a `value::Value`.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[5,"from_value","","Deserialize a `value::Value` from any serde deserializable object.",null,{"inputs":[{"name":"value"}],"output":{"name":"result"}}],[0,"ser","","Pickle serialization",null,null],[3,"Serializer","serde_pickle::ser","A structure for serializing Rust values into a Pickle stream.",null,null],[5,"value_to_writer","","Encode the value into a pickle stream.",null,{"inputs":[{"name":"w"},{"name":"value"},{"name":"bool"}],"output":{"name":"result"}}],[5,"to_writer","","Encode the specified struct into a `[u8]` writer.",null,{"inputs":[{"name":"w"},{"name":"t"},{"name":"bool"}],"output":{"name":"result"}}],[5,"value_to_vec","","Encode the value into a `Vec&lt;u8&gt;` buffer.",null,{"inputs":[{"name":"value"},{"name":"bool"}],"output":{"name":"result"}}],[5,"to_vec","","Encode the specified struct into a `Vec&lt;u8&gt;` buffer.",null,{"inputs":[{"name":"t"},{"name":"bool"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"w"},{"name":"bool"}],"output":{"name":"self"}}],[11,"into_inner","","Unwrap the `Writer` from the `Serializer`.",0,{"inputs":[{"name":"serializer"}],"output":{"name":"w"}}],[11,"serialize_bool","","",0,{"inputs":[{"name":"serializer"},{"name":"bool"}],"output":{"name":"result"}}],[11,"serialize_i8","","",0,{"inputs":[{"name":"serializer"},{"name":"i8"}],"output":{"name":"result"}}],[11,"serialize_i16","","",0,{"inputs":[{"name":"serializer"},{"name":"i16"}],"output":{"name":"result"}}],[11,"serialize_i32","","",0,{"inputs":[{"name":"serializer"},{"name":"i32"}],"output":{"name":"result"}}],[11,"serialize_i64","","",0,{"inputs":[{"name":"serializer"},{"name":"i64"}],"output":{"name":"result"}}],[11,"serialize_u8","","",0,{"inputs":[{"name":"serializer"},{"name":"u8"}],"output":{"name":"result"}}],[11,"serialize_u16","","",0,{"inputs":[{"name":"serializer"},{"name":"u16"}],"output":{"name":"result"}}],[11,"serialize_u32","","",0,{"inputs":[{"name":"serializer"},{"name":"u32"}],"output":{"name":"result"}}],[11,"serialize_u64","","",0,{"inputs":[{"name":"serializer"},{"name":"u64"}],"output":{"name":"result"}}],[11,"serialize_f32","","",0,{"inputs":[{"name":"serializer"},{"name":"f32"}],"output":{"name":"result"}}],[11,"serialize_f64","","",0,{"inputs":[{"name":"serializer"},{"name":"f64"}],"output":{"name":"result"}}],[11,"serialize_char","","",0,{"inputs":[{"name":"serializer"},{"name":"char"}],"output":{"name":"result"}}],[11,"serialize_str","","",0,{"inputs":[{"name":"serializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_bytes","","",0,null],[11,"serialize_none","","",0,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_some","","",0,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_unit","","",0,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_unit_struct","","Override `visit_unit_struct` to serialize unit structs as ().",0,{"inputs":[{"name":"serializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_newtype_struct","","Override `visit_newtype_struct` to serialize newtypes without an object wrapper.",0,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_unit_variant","","",0,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_newtype_variant","","",0,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_tuple_variant","","",0,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_struct_variant","","",0,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_tuple","","",0,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq","","",0,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq_elt","","",0,{"inputs":[{"name":"serializer"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_map","","",0,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_map_elt","","",0,{"inputs":[{"name":"serializer"},{"name":"k"},{"name":"v"}],"output":{"name":"result"}}],[0,"de","serde_pickle","# Pickle deserialization",null,null],[3,"Deserializer","serde_pickle::de","Decodes pickle streams into values.",null,null],[5,"from_iter","","Decodes a value directly from an iterator.",null,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[5,"from_reader","","Decodes a value from a `std::io::Read`.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"from_slice","","Decodes a value from a byte slice `&amp;[u8]`.",null,null],[5,"value_from_iter","","Decodes a value directly from an iterator.",null,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[5,"value_from_reader","","Decodes a value from a `std::io::Read`.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"value_from_slice","","Decodes a value from a byte slice `&amp;[u8]`.",null,null],[11,"new","","",1,{"inputs":[{"name":"iter"},{"name":"bool"}],"output":{"name":"deserializer"}}],[11,"end","","",1,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"deserialize","","",1,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_option","","",1,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_unit_struct","","",1,{"inputs":[{"name":"deserializer"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_newtype_struct","","",1,{"inputs":[{"name":"deserializer"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_enum","","",1,null],[11,"visit_variant","","",1,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_unit","","",1,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_newtype","","",1,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_tuple","","",1,{"inputs":[{"name":"deserializer"},{"name":"usize"},{"name":"v"}],"output":{"name":"result"}}],[11,"visit_struct","","",1,null],[0,"error","serde_pickle","Error objects and codes",null,null],[4,"ErrorCode","serde_pickle::error","",null,null],[13,"Unsupported","","Unsupported opcode",2,null],[13,"EOFWhileParsing","","EOF while parsing op argument",2,null],[13,"StackUnderflow","","Stack underflowed",2,null],[13,"NegativeLength","","Length prefix found negative",2,null],[13,"StringNotUTF8","","String decoding as UTF-8 failed",2,null],[13,"InvalidStackTop","","Wrong stack top type for opcode",2,null],[13,"ValueNotHashable","","Value not hashable, but used as dict key or set item",2,null],[13,"Recursive","","Recursive structure found, which we don&#39;t support",2,null],[13,"UnresolvedGlobal","","A &quot;module global&quot; reference wasn&#39;t resolved by REDUCE",2,null],[13,"UnsupportedGlobal","","A &quot;module global&quot; isn&#39;t supported",2,null],[13,"MissingMemo","","A value was missing from the memo",2,null],[13,"InvalidLiteral","","Invalid literal found",2,null],[13,"TrailingBytes","","Found trailing bytes after STOP opcode",2,null],[13,"InvalidType","","Invalid type encountered",2,null],[13,"InvalidValue","","Invalid value encountered",2,null],[13,"InvalidLength","","Invalid length encountered",2,null],[13,"UnknownVariant","","Unknown enum variant",2,null],[13,"UnknownField","","Unknown field",2,null],[13,"MissingField","","Missing field",2,null],[13,"Custom","","Custom error",2,null],[4,"Error","","This type represents all possible errors that can occur when serializing or\ndeserializing a value.",null,null],[13,"Io","","Some IO error occurred when serializing or deserializing a value.",3,null],[13,"Eval","","The pickle had some error while interpreting.",3,null],[13,"Syntax","","Syntax error while transforming into Rust values.",3,null],[6,"Result","","",null,null],[11,"fmt","","",2,{"inputs":[{"name":"errorcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"errorcode"}],"output":{"name":"errorcode"}}],[11,"fmt","","",2,{"inputs":[{"name":"errorcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",3,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"custom","","",3,{"inputs":[{"name":"t"}],"output":{"name":"error"}}],[11,"end_of_stream","","",3,{"inputs":[],"output":{"name":"error"}}],[11,"invalid_type","","",3,{"inputs":[{"name":"type"}],"output":{"name":"error"}}],[11,"invalid_value","","",3,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"invalid_length","","",3,{"inputs":[{"name":"usize"}],"output":{"name":"error"}}],[11,"unknown_variant","","",3,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"unknown_field","","",3,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"missing_field","","",3,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"custom","","",3,{"inputs":[{"name":"t"}],"output":{"name":"error"}}],[0,"value","serde_pickle","Python values, and serialization instances for them.",null,null],[4,"Value","serde_pickle::value","Represents all primitive builtin Python values that can be restored by\nunpickling.",null,null],[13,"None","","None",4,null],[13,"Bool","","Boolean",4,null],[13,"I64","","Short integer",4,null],[13,"Int","","Long integer (unbounded length)",4,null],[13,"F64","","Float",4,null],[13,"Bytes","","Bytestring",4,null],[13,"String","","Unicode string",4,null],[13,"List","","List",4,null],[13,"Tuple","","Tuple",4,null],[13,"Set","","Set",4,null],[13,"FrozenSet","","Frozen (immutable) set",4,null],[13,"Dict","","Dictionary (map)",4,null],[4,"HashableValue","","Represents all primitive builtin Python values that can be contained\nin a &quot;hashable&quot; context (i.e., as dictionary keys and set elements).",null,null],[13,"None","","None",5,null],[13,"Bool","","Boolean",5,null],[13,"I64","","Short integer",5,null],[13,"Int","","Long integer",5,null],[13,"F64","","Float",5,null],[13,"Bytes","","Bytestring",5,null],[13,"String","","Unicode string",5,null],[13,"Tuple","","Tuple",5,null],[13,"FrozenSet","","Frozen (immutable) set",5,null],[5,"to_value","","Serialize any serde serializable object into a `value::Value`.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[5,"from_value","","Deserialize a `value::Value` from any serde deserializable object.",null,{"inputs":[{"name":"value"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"value"},{"name":"value"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"value"},{"name":"value"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"value"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"value"}],"output":{"name":"value"}}],[11,"fmt","","",5,{"inputs":[{"name":"hashablevalue"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"hashablevalue"}],"output":{"name":"hashablevalue"}}],[11,"to_hashable","","Convert the value into a hashable version, if possible.  If not, return\na ValueNotHashable error.",4,{"inputs":[{"name":"value"}],"output":{"name":"result"}}],[11,"to_value","","Convert the value into its non-hashable version.  This always works.",5,{"inputs":[{"name":"hashablevalue"}],"output":{"name":"value"}}],[11,"fmt","","",4,{"inputs":[{"name":"value"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"hashablevalue"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"hashablevalue"},{"name":"hashablevalue"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"hashablevalue"},{"name":"hashablevalue"}],"output":{"name":"option"}}],[11,"cmp","","",5,{"inputs":[{"name":"hashablevalue"},{"name":"hashablevalue"}],"output":{"name":"ordering"}}],[11,"deserialize","","",4,{"inputs":[{"name":"d"}],"output":{"name":"stdresult"}}],[11,"deserialize","","",5,{"inputs":[{"name":"d"}],"output":{"name":"stdresult"}}]],"paths":[[3,"Serializer"],[3,"Deserializer"],[4,"ErrorCode"],[4,"Error"],[4,"Value"],[4,"HashableValue"]]};
initSearch(searchIndex);
