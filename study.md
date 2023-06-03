## 실행 결과 타입을 나타낼 때 무엇이 효과적일까?

일단은 FetchResult와 ExecutionResult.
이 둘은 GraphQL 실행과 관련된 것으로, GraphQL 쿼리 실행 결과를 나타낸다.

#### ExecutionResult는 GraphQL 실행 결과의 구조를 정의하는 인터페이스다. 아래 두 속성을 포함한다.
- errors: 오류가 발생한 경우 비어있지 않은 GraphQLError 객체의 배열로 표현된다. 이 속성은 쿼리 실행 중에 오류가 발생한 경우 포함된다.
- data: 쿼리의 성공적인 실행 결과다. 이는 TData 타입이거나 null일 수 있다.

#### FetchResult는 ExecutionResult를 확장한 개념으로 두 개의 추가 속성을 가지고 있다.
- extensions: 실행 결과와 관련된 확장 또는 추가 정보를 나타내는 선택적인 객체.
- context: 실행 컨텍스트를 나타내는 선택적인 객체.

요약하자면, FetchResult는 확장된 ExecutionResult로, 확장과 컨텍스트와 관련된 추가 속성을 포함한다.
GraphQL 실행 결과에 이러한 속성을 포함하려면 FetchResult를 반환 타입으로 사용하면 된다. 그렇지 않은 경우에는 ExecutionResult만 사용하면 된다.

따라서 추가적인 속성이 필요하지 않으면 ExecutionResult를 사용하는 것이 더 효율적일 수 있다.

```
The return type FetchResult and ExecutionResult are related to GraphQL execution and represent the result of executing a GraphQL query.
ExecutionResult is an interface that defines the structure of the result of a GraphQL execution. It has two properties:
errors: An optional array of GraphQLError objects. This property is included when any errors occurred during the execution of the query.
data: The result of a successful execution of the query. It can be of type TData or null.
FetchResult is a type that extends ExecutionResult and adds two additional properties:
extensions: An optional object that represents any extensions or additional information associated with the execution result.
context: An optional object that represents the execution context.
In summary, FetchResult is an extended version of ExecutionResult that includes additional properties for extensions and context. If you need to include these properties in the result of your GraphQL execution, you can use FetchResult as the return type. Otherwise, you can use ExecutionResult alone.
```
